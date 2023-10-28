import { Amplify } from "aws-amplify"

export function initAmplify() {
    Amplify.configure({
        aws_cognito_region: "us-east-2",
        aws_user_pools_id: "",
        aws_user_pools_web_client_id: "",
        aws_cognito_identity_pool_id: "",
    });
}