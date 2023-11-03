from langflow import load_flow_from_json
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
flow = load_flow_from_json("Evil Lovelace.json", tweaks=TWEAKS)
# Now you can use it like any chain
flow("Hey, have you heard of LangFlow?")
