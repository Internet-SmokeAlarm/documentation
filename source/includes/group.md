# Groups

Groups provide logical separation between projects. Each group maintains its own set of users, devices, and learning rounds.

## Create

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.create_group("GROUP_NAME")
```

> Returns:

```python
Group object
```

`POST /v1/group/create`

This endpoint creates a new group.

### Request Body

Parameter | Description
--------- | -----------
group_name | logical name of the new group

## Delete

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.delete_group("GROUP_ID")
```

> Returns:

```python
True
```

`POST /v1/group/delete`

This endpoint deletes an existing group.

### Request Body

Parameter | Description
--------- | -----------
group_id | ID of the group to delete

## Get

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.get_group("GROUP_ID")
```

> Returns:

```python
Group object
```

`GET /v1/group/get/<GROUP_ID>`

This endpoint retrieves the object representation of a specific group.

### URL Parameters

Parameter | Description
--------- | -----------
GROUP_ID | ID of the group to retrieve

## Get current round IDs

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.get_group_current_round_ids("GROUP_ID")
```

> Returns:

```python
[
    "ID_1",
    "ID_2",
    ...
]
```

`GET /v1/group/get/current_round_id/<GROUP_ID>`

This endpoint retrieves the list of learning round IDs that are currently active for a specific group.

### URL Parameters

Parameter | Description
--------- | -----------
GROUP_ID | ID of the group to retrieve
