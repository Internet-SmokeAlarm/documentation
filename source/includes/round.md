# Learning Rounds

Each learning round represents one execution of local training and central aggregation.

## Start

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway
from fedlearn.models import DeviceSelectionStrategy
from fedlearn.models import RoundConfiguration
from fedlearn.models.termination_criteria import DurationTerminationCriteria

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
round_config = RoundConfiguration(1,
                                  0,
                                  DeviceSelectionStrategy.RANDOM,
                                  [
                                    DurationTerminationCriteria(50)
                                  ])
api.start_round("group_id", "previous_round_id", round_config)
```

> Returns:

```python
"round ID"
```

`POST /v1/round/start`

Starts a new learning round.

### Request Body

Parameter | Description
--------- | -----------
group_id | group ID
device_selection_strategy | strategy to use when selecting devices to use in a learning round. Can be: "RANDOM"
num_devices | number of submitted device models required for successful round completion
num_buffer_devices | number of extra devices to select for  training. Reduces likelihood of learning round failure when extra devices are provisioned
previous_round_id | previous round ID. If starting a new round sequence, this should be an empty string
termination_criteria | list of termination criteria for the round. Should be an empty list ([]) if the round should wait for manual termination or successful completion.

## Cancel

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.cancel_round("round_id")
```

> Returns:

```python
True
```

`POST /v1/round/cancel`

Cancel a learning round.

### Request Body

Parameter | Description
--------- | -----------
round_id | learning round ID to cancel

## Get

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.get_round("group_id", "round_id")
```

> Returns:

```python
Round object
```

`GET /v1/round/get/<GROUP_ID>/<ROUND_ID>`

Retrieve a learning round.

### URL Parameters

Parameter | Description
--------- | -----------
GROUP_ID | group ID of parent to learning round
ROUND_ID | learning round ID to retrieve

## Get aggregate model download link

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.get_round_aggregate_model_download_link("group_id", "round_id")
```

> Returns:

```python
{
    ...
}
```

`GET /v1/round/get/aggregate_model/<GROUP_ID>/<ROUND_ID>`

Retrieve a download link for a learning round's aggregate model.

### URL Parameters

Parameter | Description
--------- | -----------
GROUP_ID | group ID of parent to learning round
ROUND_ID | learning round ID to retrieve

## Get start model download link

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.get_round_start_model_download_link("group_id", "round_id")
```

> Returns:

```python
{
    "model_url" : "MODEL URL"
}
```

`GET /v1/round/get/start_model/<GROUP_ID>/<ROUND_ID>`

Retrieve a download link for a learning round's start model.

### URL Parameters

Parameter | Description
--------- | -----------
GROUP_ID | group ID of parent to learning round
ROUND_ID | learning round ID to retrieve

## Get start model submit link

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.get_round_start_model_submit_link("group_id", "round_id")
```

> Returns:

```python
{
    "model_url" : ...
}
```

`POST /v1/round/submit_start_model`

Get an upload link for a learning round's start model.

### Request Body

Parameter | Description
--------- | -----------
group_id | group ID of parent to learning round
round_id | learning round ID to retrieve

## Get model update submit link

```python
from fedlearn import FedLearnApi
from fedlearn import DefaultGateway

api = FedLearnApi(DefaultGateway.PRODUCTION, "...API Key Here...")
api.get_model_update_submit_link("group_id", "round_id", "device_id")
```

> Returns:

```python
{
    "model_url" : ...
}
```

`POST /v1/submit_model_update`

Get an upload link for a device active in a specified learning round.

### Request Body

Parameter | Description
--------- | -----------
group_id | group ID of parent to learning round
round_id | learning round ID to retrieve
device_id | device ID
