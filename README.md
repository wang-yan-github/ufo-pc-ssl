- 启动nginx容器
    ``` docker
    docker run --name nginx-ssl \
            -p 443:443\
            -p 80:80 \
            -v $(pwd)/nginx/www:/usr/share/nginx/html:rw\
            -v $(pwd)/nginx/config/nginx.conf:/etc/nginx/nginx.conf/:rw\
            -v $(pwd)/nginx/config/conf.d/default.conf:/etc/nginx/conf.d/default.conf:rw\
            -v $(pwd)/nginx/logs:/var/log/nginx/:rw\
            -v $(pwd)/nginx/ssl:/ssl/:rw\
            -d nginx
    ```