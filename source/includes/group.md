# Groups

Groups provide logical separation between projects. Each group maintains its own set of users, devices, and learning rounds.

## Create

```python
# Replace "GROUP_NAME" with the group name
api.create_group("GROUP_NAME")
```

> Returns:

```python
Group object
```

This endpoint creates a new group.

### HTTP Request

`POST https://ivcqfi3rrc.execute-api.us-east-1.amazonaws.com/prod/v1/group/create`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
group_name | N/A | logical name of the new group

## Delete

```python
# Replace "GROUP_ID" with the group ID
api.delete_group("GROUP_ID")
```

> Returns:

```python
# If successful:
True
# Otherwise, throws an error.
```

This endpoint deletes an existing group.

### HTTP Request

`POST https://ivcqfi3rrc.execute-api.us-east-1.amazonaws.com/prod/v1/group/delete`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
group_id | N/A | ID of the group to delete

## Get

```python
# Replace "GROUP_ID" with the group ID
api.get_group("GROUP_ID")
```

> Returns:

```python
Group object
```

This endpoint retrieves the object representation of a specific group.

### HTTP Request

`GET https://ivcqfi3rrc.execute-api.us-east-1.amazonaws.com/prod/v1/group/get/<GROUP_ID>`

### URL Parameters

Parameter | Description
--------- | -----------
GROUP_ID | ID of the group to retrieve

## Get current round IDs

```python
# Replace "GROUP_ID" with the group ID
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

This endpoint retrieves the list of learning round IDs that are currently active for a specific group.

### HTTP Request

`GET https://ivcqfi3rrc.execute-api.us-east-1.amazonaws.com/prod/v1/group/get/current_round_id/<GROUP_ID>`

### URL Parameters

Parameter | Description
--------- | -----------
GROUP_ID | ID of the group to retrieve
