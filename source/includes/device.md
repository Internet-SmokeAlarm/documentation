# Devices

Devices are authenticated edge systems that are members of a specific group.

## Is device active?

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.is_device_active("group_id", "round_id", "device_id")
```

> Returns:

```python
True/False
```

`GET /v1/device/get/active/<GROUP_ID>/<ROUND_ID>/<DEVICE_ID>`

Returns a boolean value whether or not this device is active in a specified learning round.

### URL Parameters

Parameter | Description
--------- | -----------
GROUP_ID | group ID (the group that the device belongs to)
ROUND_ID | round ID (learning round to parse)
DEVICE_ID | device ID

## Register

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.register_device("group_id")
```

> Returns:

```python
Device object
```

`POST /v1/device/register`

Creates a new device & registers it to the specified group.

### Request Body

Parameter | Description
--------- | -----------
group_id | group ID that the new device will belong to
