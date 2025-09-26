import unittest
import ai_utils

new_agent = ai_utils.Agent()


class ResponseTests(unittest.TestCase):

    @staticmethod
    def new_response(text: str):
        return ai_utils.ResponseTemplate(text)

    def test_line_interpreter(self):
        self.new_response("Issues in your code:")


class OpenAITests(unittest.TestCase):

    def test_get_response(self):
        pass

