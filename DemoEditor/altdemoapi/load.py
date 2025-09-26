import yaml


class ErrorTags:
    def __init__(self):
        self.NULL_RESPONSE = "null_response"


class ConfigTags:

    def __init__(self):
        self.AI_CONTEXT = "ai_context"
        self.TEST_DIR = "test_file_dir"
        self.AI_SAMPLES = "ai_sample_inc"


def load(file_nm):
    with open(file_nm, "r") as file:
        return yaml.safe_load(file)


def load_config():
    return load("conf.yaml")


def load_errors():
    return load("errors.yaml")


error_tags = ErrorTags()
config_tags = ConfigTags()
errors = load_errors()
config = load_config()


def increment_ai_samples():
    old_samples = config[config_tags.AI_SAMPLES]
    config[config_tags.AI_SAMPLES] += 1
    return old_samples


def reset_ai_samples(num: int):
    config[config_tags.AI_SAMPLES] = num


def dump_conf(spec_config=None):
    to_dump = config if not spec_config else spec_config
    with open("conf.yaml", "w") as conf_file:
        yaml.safe_dump(to_dump, conf_file)
