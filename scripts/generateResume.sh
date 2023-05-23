#!/bin/bash
rm /workspaces/portfolio-site/static/files/resume.pdf
rm -rf /workspaces/portfolio-site/latex/generated
mkdir /workspaces/portfolio-site/latex/generated
cd /workspaces/portfolio-site/latex
xelatex -no-pdf -synctex=1 -interaction=nonstopmode -file-line-error -recorder -output-directory="/workspaces/portfolio-site/latex/generated"  "/workspaces/portfolio-site/latex/resume.tex"
xdvipdfmx -E -o "/workspaces/portfolio-site/latex/generated/resume.pdf"  "/workspaces/portfolio-site/latex/generated/resume.xdv"
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.5 -dNOPAUSE -dQUIET -dBATCH -dPrinted=false -sOutputFile=/workspaces/portfolio-site/static/files/resume.pdf /workspaces/portfolio-site/latex/generated/resume.pdf
git add /workspaces/portfolio-site/static/files/resume.pdf