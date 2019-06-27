# docker安装nginx并配置通过https访问

## openssl生成证书 

- 设置server.key
    `openssl genrsa -des3 -out server.key 1024 `

- 参数设置
    `openssl req -new -key server.key -out server.csr`
    
    Country Name (2 letter code) [AU]: 国家名称
    State or Province Name (full name) [Some-State]: 省
    Locality Name (eg, city) []: 城市
    Organization Name (eg, company) [Internet Widgits Pty Ltd]: 公司名
    Organizational Unit Name (eg, section) []: 
    Common Name (e.g. server FQDN or YOUR name) []: 网站域名
    Email Address []: 邮箱
    
    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []: 这里要求输入密码
    An optional company name []:
    
- 写RSA秘钥
    `openssl rsa -in server.key -out server_nopwd.key`

-获取私钥 
    `openssl x509 -req -days 365 -in server.csr -signkey server_nopwd.key -out server.crt`

## docker安装nginx
- 下载最新的nginx的docker image 
    `docker pull nginx:latest`

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