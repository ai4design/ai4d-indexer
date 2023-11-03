import requests

BASE_API_URL = "http://127.0.0.1:7860/api/v1/process"
FLOW_ID = "49d8d7b5-b47f-4840-a564-dec6dfa81072"
# You can tweak the flow by adding a tweaks dictionary
# e.g {"OpenAI-XXXXX": {"model_name": "gpt-4"}}
TWEAKS = [
  {
    "WebBaseLoader-boTso": {},
    "CharacterTextSplitter-fMjKy": {},
    "PyPDFLoader-8BbrV": {},
    "CharacterTextSplitter-lalyW": {},
    "OpenAIEmbeddings-q9bWW": {},
    "OpenAI-JBBsW": {},
    "VectorStoreInfo-ge3gS": {},
    "VectorStoreInfo-oNHL2": {},
    "VectorStoreRouterAgent-KG6mt": {},
    "VectorStoreRouterToolkit-yQ586": {},
    "Chroma-qfQDb": {},
    "Chroma-LBwfo": {}
  }
]

def run_flow(message: str, flow_id: str, tweaks: dict = None) -> dict:
    """
    Run a flow with a given message and optional tweaks.

    :param message: The message to send to the flow
    :param flow_id: The ID of the flow to run
    :param tweaks: Optional tweaks to customize the flow
    :return: The JSON response from the flow
    """
    api_url = f"{BASE_API_URL}/{flow_id}"

    payload = {"inputs": {"input": message}}

    if tweaks:
        payload["tweaks"] = tweaks

    response = requests.post(api_url, json=payload)
    return response.json()

# Setup any tweaks you want to apply to the flow

print(run_flow("Your message", flow_id=FLOW_ID, tweaks=TWEAKS))
