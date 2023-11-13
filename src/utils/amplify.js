import { Amplify } from "aws-amplify"

export function initAmplify() {
    Amplify.configure({
        aws_cognito_region: "us-east-2",
        aws_user_pools_id: "us-east-2_I5MbD6fls",
        aws_user_pools_web_client_id: "293rvi00hh5g5cufqmd5v4c0qe",
        aws_cognito_identity_pool_id: "us-east-2:6db6f271-e40e-4b03-8fbe-2bda46a50547",
    });
}