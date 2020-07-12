# Projects

A Project contains all resources associated with one Federated Learning deployment, including Experiments, Jobs, and Devices. Additionally, users can be configured on a per-project level.

## Create

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Project.create(project_name="My Friendly Project Name")
```

> Returns:

```python
{
    "statusCode": 200,
    "body": {
        'project_id': '92cae23fa2754c5982866471c9b43fb7'
    }
}
```

`POST /v1/project/create`

Create a new Project.

### Request Body

Parameter | Description
--------- | -----------
project_name | Friendly name of the project

## Delete

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Project.delete(project_id="...Project ID...")
```

> Returns:

```python
{
    "statusCode": 200,
    "body": {}
}
```

`POST /v1/project/delete`

Delete a Project.

### Request Body

Parameter | Description
--------- | -----------
project_id | Project ID

## Get

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Project.get(project_id="...Project ID...")
```

> Returns:

```python
{
    "statusCode": 200,
    "body": {
        'name': 'my_name',
        'ID': 'cdace1ad391e444aa5ade2ce7f04c5e6',
        'devices': {},
        'experiments': {
            '9148548012074b068ba6d260f675ab50': {
                'is_active': False,
                'start_model': {},
                'jobs': [],
                'hyperparameters': {},
                'ID': '9148548012074b068ba6d260f675ab50',
                'current_job': 'NONE',
                'current_model': {}
            }
        },
        'members': {
            '123123': {
                'permission_level': 100
            }
        },
        'billing': {}
    }
}
```

`GET /v1/project/get/<project_id>`

Get a Project.

### Request Body

Parameter | Description
--------- | -----------
project_id | Project ID

## Get active jobs

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Project.active_jobs(project_id="...Project ID...")
```

> Returns:

```python
{
    "statusCode": 200,
    "body": {
        'job_ids': ['3800a892631b4c75b41f035e304c36c4']
    }
}
```

`GET /v1/project/active_jobs/<project_id>`

Get a list of active Jobs in a Project.

### Request Body

Parameter | Description
--------- | -----------
project_id | Project ID
