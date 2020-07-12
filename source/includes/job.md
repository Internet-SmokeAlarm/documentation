# Jobs

Each Job represents one execution of training at the edge and aggregation.

## Create Job

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Job.create(project_id="...Project ID...",
                              device_selection_strategy="RANDOM",
                              experiment_id="...Experiment ID...",
                              num_devices=1,
                              num_buffer_devices=0,
                              termination_criteria=[])
```

> Returns:

```python
{
    "statusCode": 200,
    "body": {
        'ID': 'a9ef7a04d05a4bf9a779738f8d695696',
        'status': 'IN_PROGRESS',
        'devices': [
            'dg-vG9lw5qTBzc2cDwfUdl3CtXKfTfUT'
        ],
        'aggregate_model': {},
        'start_model': {
            'entity_id': 'd157244577c04b1a83943b425a04f63a',
            'name': 'e0e24bf5128c46308e578fa1e19783ef/d157244577c04b1a83943b425a04f63a/start_model',
            'size': '403693'
        },
        'configuration': {
            'num_devices': '1',
            'num_buffer_devices': '0',
            'device_selection_strategy': 'RANDOM',
            'termination_criteria': []
        },
        'models': {},
        'created_on': '1593979876.5036337',
        'billable_size': '0',
        'project_id': 'e0e24bf5128c46308e578fa1e19783ef',
        'experiment_id': 'd157244577c04b1a83943b425a04f63a'
    }
}
```

`POST /v1/job/create`

Create a new Job.

### Request Body

Parameter | Description
--------- | -----------
project_id | Project the new Job belongs to
experiment_id | Experiment the new Job belongs to
device_selection_strategy | strategy to use when selecting devices to use in a learning round. Can be one of: "RANDOM"
num_devices | number of submitted device models required for successful round completion
num_buffer_devices | number of extra devices to select for training. Reduces likelihood of Job failure due to devices that fail
termination_criteria | list of termination criteria for the Job. Should be an empty list ([]) if the Job should wait for manual termination or successful completion.

## Cancel Job

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Job.cancel(project_id="...Project ID...",
                              job_id="...Job ID...")
```

> Returns:

```python
{
    "statusCode": 200,
    "body": {}
}
```

`POST /v1/job/cancel`

Cancel a Job.

### Request Body

Parameter | Description
--------- | -----------
project_id | Project ID
job_id | Job to cancel

## Get Job

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Job.get(project_id="...Project ID...",
                           job_id="...Job ID...")
```

> Returns:

```python
{
    "statusCode": 200,
    "body": {
        'ID': 'a9ef7a04d05a4bf9a779738f8d695696',
        'status': 'IN_PROGRESS',
        'devices': [
            'dg-vG9lw5qTBzc2cDwfUdl3CtXKfTfUT'
        ],
        'aggregate_model': {},
        'start_model': {
            'entity_id': 'd157244577c04b1a83943b425a04f63a',
            'name': 'e0e24bf5128c46308e578fa1e19783ef/d157244577c04b1a83943b425a04f63a/start_model',
            'size': '403693'
        },
        'configuration': {
            'num_devices': '1',
            'num_buffer_devices': '0',
            'device_selection_strategy': 'RANDOM',
            'termination_criteria': []
        },
        'models': {},
        'created_on': '1593979876.5036337',
        'billable_size': '0',
        'project_id': 'e0e24bf5128c46308e578fa1e19783ef',
        'experiment_id': 'd157244577c04b1a83943b425a04f63a'
    }
}
```

`GET /v1/job/get/<project_id>/<job_id>`

Retrieve a Job.

### URL Parameters

Parameter | Description
--------- | -----------
project_id | Project that this Job belongs to
job_id | Job to retrieve

## Get aggregate model

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Job.get_aggregate_model(project_id="...Project ID...",
                                           job_id="...Job ID...")
```

> Returns:

```python
{
    ...
}
```

`GET /v1/job/aggregate_model/<project_id>/<job_id>`

Retrieve a Job's aggregate model state dictionary.

### URL Parameters

Parameter | Description
--------- | -----------
project_id | Project ID
job_id | Job ID

## Get start model

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Job.get_start_model(project_id="...Project ID...",
                                       job_id="...Job ID...")
```

> Returns:

```python
{
    ...
}
```

`GET /v1/job/start_model/<project_id>/<job_id>`

Retrieve a Job's start model state dictionary.

### URL Parameters

Parameter | Description
--------- | -----------
project_id | Project ID
job_id | Job ID
