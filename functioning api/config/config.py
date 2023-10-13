import os
from dotenv import load_dotenv

load_dotenv()

# OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
OPENAI_API_KEY = "sk-"
OPENAI_API_URL = os.environ.get(
    "OPENAI_API_URL", "https://api.openai.com/v1/embeddings"
)
OPENAI_EMBEDDING_MODEL = os.environ.get(
    "OPENAI_EMBEDDING_MODEL", "text-embedding-ada-002"
)
OPENAI_CHAT_COMPLETION_URL = os.environ.get(
    "OPENAI_CHAT_COMPLETION_API", "https://api.openai.com/v1/chat/completions"
)
OPENAI_CHAT_COMPLETION_MODEL = os.environ.get(
    "OPENAI_CHAT_COMPLETION_MODEL", "gpt-3.5-turbo"
)
PINECONE_API_KEY ="2"
PINECONE_ENV = "us-west4-gcp-fre"
# os.environ['OPENAI_API_URL']="https://api.openai.com/v1/embeddings"
# os.environ['OPENAI_EMBEDDING_MODEL']="https://api.openai.com/v1/chat/completions"
# os.environ['OPENAI_CHAT_COMPLETION_MODEL']='https://api.openai.com/v1/chat/completions'