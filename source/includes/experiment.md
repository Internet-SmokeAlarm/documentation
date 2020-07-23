# Experiments

An experiment represents a single model + hyperparameter configuration, and is comprised of a series of Jobs, which are executed sequentially to train the provided model with the specified hyperparameters.

## Create Experiment

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Experiment.create(project_id="...Project ID...")
```

> Returns:

```python
{
    "statusCode": 204,
    "body": {
        'ID': '64fb44b25e0d48d2b74e120513687bd7',
        'jobs': [],
        'hyperparameters': {},
        'current_job': 'NONE',
        'start_model': {},
        'current_model': {},
        'is_active': False
    }
}
```

`POST /v1/experiment/create`

Create a new experiment.

### Request Body

Parameter | Description
--------- | -----------
project_id | Project ID

## Get Experiment

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Experiment.get(project_id="...Project ID...",
                                  experiment_id="...Experiment ID...")
```

> Returns:

```python
{
    "statusCode": 204,
    "body": {
        'ID': 'e627ffd92d6449e9a411b6462b47b47d',
        'jobs': [],
        'hyperparameters': {
            'learning_rate': 0.01
        },
        'current_job': 'NONE',
        'start_model': {
            'entity_id': 'e627ffd92d6449e9a411b6462b47b47d',
            'name': 'ace0e5d0f50c40ec89e38f770c23eedd/e627ffd92d6449e9a411b6462b47b47d/start_model',
            'size': '403693'
        },
        'current_model': {
            'entity_id': 'e627ffd92d6449e9a411b6462b47b47d',
            'name': 'ace0e5d0f50c40ec89e38f770c23eedd/e627ffd92d6449e9a411b6462b47b47d/start_model',
            'size': '403693'
        },
        'is_active': False
    }
}
```

`GET /v1/experiment/get/<project_id>/<experiment_id>`

Get an experiment.

### URL Parameters

Parameter | Description
--------- | -----------
project_id | Project ID
experiment_id | The experiment that this start model will be submitted to

## Submit start model

```python
import vergeai
vergeai.api_key = "...API Key Here..."

response = vergeai.Experiment.submit_start_model(model={...},
                                                 project_id="...Project ID...",
                                                 experiment_id="...Experiment ID...",
                                                 block=True)
```

> Returns:

```python
{
    "statusCode": 204,
    "body": {}
}
```

`POST /v1/experiment/submit_start_model`

Submit an experiment's start model.

### Request Body

Parameter | Description
--------- | -----------
model | dictionary
project_id | Project ID
experiment_id | The experiment that this start model will be submitted to
block | True/False whether or not we should wait to prevent stale data
