# Devices

Each Device represents an authenticated edge system in a Project.

## Is device active?

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Device.is_active(project_id="...Project ID...",
                                    job_id="...Job ID...",
                                    device_id="...Device ID...")
```

> Returns:

```python
{
    "statusCode": 200,
    "body": {
        "is_device_active": True
    }
}
```

`GET /v1/device/is_active/<project_id>/<job_id>/<device_id>`

Returns a boolean value whether or not the specified Device is active in a specified Job.

If this API endpoint is called using a device's API key, it will only be able to view status information about itself (and not other devices). If a user owns the API key, they will be able to view status information on all devices.

### URL Parameters

Parameter | Description
--------- | -----------
project_id | project ID (the Project that the device belongs to)
job_id | job ID (the Job to check for status)
device_id | device ID

## Register

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Device.register(project_id="...Project ID...")
```

> Returns:

```python
{
    "statusCode": 200,
    "body": {
        "device_id": "...Device ID...",
        "device_api_key": "...Device API Key"
    }
}
```

`POST /v1/device/create`

Creates a new device & registers it to the specified Project.

### Request Body

Parameter | Description
--------- | -----------
project_id | Project that the device will belong to

## Submit Model

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Device.submit_model(model={},
                                       project_id="...Project ID...",
                                       job_id="...Job ID...")
```

> Returns:

```python
{
    "statusCode": 200,
    "body": {
        "device_id": "...Device ID...",
        "device_api_key": "...Device API Key"
    }
}
```

`POST /v1/device/submit_model_update`

Uploads the device's model contribution for a specified Job.

Users cannot call this endpoint with their account API keys. Only Devices are allowed to make calls to this endpoint. Additionally, Devices can only submit a model to a Job that is active, and which includes the device in it.

### Request Body

Parameter | Description
--------- | -----------
model | The dictionary state_dict representation of the neural network
project_id | Project that the device will belong to
job_id | Job to submit the model to
