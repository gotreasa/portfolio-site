#!/bin/bash
rm /workspaces/site/static/files/resume.pdf
rm -rf /workspaces/site/latex/generated
mkdir /workspaces/site/latex/generated
cd /workspaces/site/latex
xelatex -no-pdf -synctex=1 -interaction=nonstopmode -file-line-error -recorder -output-directory="/workspaces/site/latex/generated"  "/workspaces/site/latex/resume.tex"
xdvipdfmx -E -o "/workspaces/site/static/files/resume.pdf"  "/workspaces/site/latex/generated/resume.xdv"