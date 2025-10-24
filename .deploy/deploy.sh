cd ~/DOMinator
npm run build:prod

rm -rf ~/../var/www/DOMinator/html
mv ~/DOMinator/build ~/../var/www/DOMinator/html