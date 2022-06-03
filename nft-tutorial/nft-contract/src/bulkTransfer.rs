use crate::*;

#[near_bindgen]
impl Contract {
    #[payable]
    pub fn nft_bulk_transfer(
        &mut self,
        receiver_id: AccountId,
        token_id: TokenId[],
        //we introduce an approval ID so that people with that approval ID can transfer the token
        approval_id: Option<u64>,
        memo: Option<String>,
    ) {
        //assert that the user attached exactly 1 yoctoNEAR. This is for security and so that the user will be redirected to the NEAR wallet. 
        assert_at_least_one_yocto();
        //get the sender to transfer the token from the sender to the receiver
        let sender_id = env::predecessor_account_id();

        // bulk transfer every nft token in the array token_id
        for i in token_id {
            self.internal_transfer(
                &sender_id,
                &receiver_id,
                &i,
                approval_id,
                memo,
            );
        }

        //call the internal transfer method and get back the previous token so we can refund the approved account IDs
        let previous_token = self.internal_transfer(
            &sender_id,
            &receiver_id,
            &token_id,
            approval_id,
            memo,
        );

        //we refund the owner for releasing the storage used up by the approved account IDs
        refund_approved_account_ids(
            previous_token.owner_id.clone(),
            &previous_token.approved_account_ids,
        );
    }
}