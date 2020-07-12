# Authentication

## Create API Key

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.APIKey.create()
```

> Returns:

```python
{
    "statusCode": 200,
    "body": {
        "key": "...key plaintext value here..."
    }
}
```

`POST /v1/auth/create`

This endpoint creates a new API key. The new API key will provide programmatic access to all resources the user (specified by the auth token included in the request) is authorized for.
