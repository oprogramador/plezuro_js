set -e
sudo apt-get install -y python-pip
sudo pip install sphinx
sudo pip install sphinx_rtd_theme
sudo apt-get install -y texlive-full
sudo apt-get install -y wkhtmltopdf
sudo ln -s /usr/bin/wkhtmltopdf /usr/local/bin/html2pdf
