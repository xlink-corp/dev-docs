#!/bin/sh

hexo clean
hexo generate
scp -r ./public/* test@120.26.196.41:/data/www/test.xlink.cn/dev-docs
