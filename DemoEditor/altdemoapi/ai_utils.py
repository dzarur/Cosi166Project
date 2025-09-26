from openai import OpenAI
import os
from dotenv import load_dotenv
import load
import re


class ResponseTemplate:
    def __init__(self, text: str):
        self.body_issue = ""
        self.body_skills = ""
        self.text = text

    def _interpret_line(self, line: str):
        pass

    def str_to_template(self):
        if len(self.text) == 0 or self.text is None:
            raise Exception(load.errors[load.error_tags.NULL_RESPONSE])
        else:
            lines = re.split(r"\n+", self.text)
            for line in lines:
                self._interpret_line(line)


class Agent:
    def __init__(self):
        load_dotenv()
        self.api_key = os.getenv("OPEN_AI_API_KEY")
        self.ai_context = load.config[load.config_tags.AI_CONTEXT]
        self.client = OpenAI(api_key=self.api_key,)

    @staticmethod
    def _write_sample(file: str, text: str):
        with open(file, "w") as sample:
            sample.write(text)

    @staticmethod
    def _exists(path: str):
        return os.path.exists(path)

    def make_request(self, prompt: str, code_sample: str, language: str, debug=None):
        response = self.client.responses.create(
            model="gpt-4o",
            instructions=f"You are a coding assistant, {self.ai_context}",
            input=f"""I was asked to write code that behaves as follows:\n{prompt}\n
            can you {self.ai_context}, my {language} code:\n{code_sample}"""
        )
        text = response.output_text
        if debug:
            self._write_sample(debug, text)
        return text


def get_test_example(file_nm: str):
    with open(f"test_files{os.sep}{file_nm}", "r") as file:
        return file.read()


if __name__ == "__main__":
    contents = get_test_example("test_sample0")
    print(contents)
    new_template = ResponseTemplate(contents)
    new_template.str_to_template()
