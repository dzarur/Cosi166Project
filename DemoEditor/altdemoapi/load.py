import yaml
import os
from dotenv import load_dotenv


class ErrorTags:
    def __init__(self):
        self.NULL_RESPONSE = "null_response"
        self.AI_RESPONSE_FORMAT = "ai_response_format"


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


# meta
ERROR_TAGS = ErrorTags()
CONFIG_TAGS = ConfigTags()
ERRORS = load_errors()
CONFIG = load_config()
load_dotenv()
OPEN_AI_API_KEY = os.getenv("OPEN_AI_API_KEY")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_DATABASE = os.getenv("DB_DATABASE")


def increment_ai_samples():
    old_samples = CONFIG[CONFIG_TAGS.AI_SAMPLES]
    CONFIG[CONFIG_TAGS.AI_SAMPLES] += 1
    return old_samples


def reset_ai_samples(num: int):
    CONFIG[CONFIG_TAGS.AI_SAMPLES] = num


def dump_conf(spec_config=None):
    to_dump = CONFIG if not spec_config else spec_config
    with open("conf.yaml", "w") as conf_file:
        yaml.safe_dump(to_dump, conf_file)
