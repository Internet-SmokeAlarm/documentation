# Authentication

## Creating API Keys

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.create_api_key()
```

> Returns:

```python
"KEY_TEXT"
```

`POST /v1/auth/create_key`

This endpoint creates a new API key. The new API key will provide programmatic access to all resources the user (specified by the auth token included in the request) is authorized for.
