const dev = {
    STRIPE_KEY: "pk_test_TdlMgtPUZYnJ53Uru7vH6U8d00UZzBPJLn",
    s3: {
        REGION: "us-east-1",
        BUCKET: "wint-notes-app-uploads"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://x2ko94ez96.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_siNRKhZl7",
        APP_CLIENT_ID: "3mt7b8dt51vbk1vrjm50nml9jj",
        IDENTITY_POOL_ID: "us-east-1:7ac7cc22-2a2f-4573-bc65-8995b9619ae5"
    },
}
const prod = {
    STRIPE_KEY: "pk_test_TdlMgtPUZYnJ53Uru7vH6U8d00UZzBPJLn",
    s3: {
        REGION: "us-east-1",
        BUCKET: "wint-notes-app-uploads"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://x2ko94ez96.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_siNRKhZl7",
        APP_CLIENT_ID: "3mt7b8dt51vbk1vrjm50nml9jj",
        IDENTITY_POOL_ID: "us-east-1:7ac7cc22-2a2f-4573-bc65-8995b9619ae5"
    },
}

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};