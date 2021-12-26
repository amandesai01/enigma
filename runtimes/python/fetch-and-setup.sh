# This script fetched the zip file containing code from CDN, unzips it, places it to correct location,
# cleans up unnecessary zip file, and finally, if setup file exists, runs the file.

if [ $ZIP_ACCESS_LINK ]
then
    wget $ZIP_ACCESS_LINK -O client.zip

    python3 -m zipfile -e client.zip client/

    rm client.zip

    if [ -e client/setup.sh ]
    then
        source client/setup.sh
    fi
else
    echo "No Zip Access Link Found! Quitting..."
fi