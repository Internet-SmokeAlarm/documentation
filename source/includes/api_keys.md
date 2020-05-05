# Authentication

## Creating API Keys

```python
api.create_api_key()
```

> Returns:

```python
"KEY_TEXT"
```

> Where "KEY_TEXT" is substituted by the full-length API key string.

This endpoint creates a new API key. The new API key will provide programmatic access to all resources the user (specified by the auth token included in the request) is authorized for.

### HTTP Request

`POST https://ivcqfi3rrc.execute-api.us-east-1.amazonaws.com/prod/v1/auth/create_key`
