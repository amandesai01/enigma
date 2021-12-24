import os
from modules.unzipper import unzip
from modules.utils import run_if_setup_file_exists

path_to_zip = os.getenv("PATH_TO_ZIP")
unzip(path_to_zip)
run_if_setup_file_exists()

from client.handler import app

if os.getenv("PHASE") == "ENIGMA.MAP":
    app.run_mapper()

if os.getenv("PHASE") == "ENIGMA.REDUCE":
    app.run_reducer()

if os.getenv("PHASE") == "ENIGMA.SHUFFLE":
    app.run_shuffler()