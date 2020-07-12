# Logging

The Verge AI language bindings provide configurable logging.

## Configuring the log level

```python
import vergeai
vergeai.initialize_logger("WARNING")
```

Set the log level.

### Request Body

Parameter | Description
--------- | -----------
log_lvl | One of: "DEBUG", "INFO", "WARNING", "ERROR"
