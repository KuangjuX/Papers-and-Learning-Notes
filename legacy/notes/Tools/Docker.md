# Docker

## 一些 Docker 相关的细节

### 启动

- `-d` 表示后台运行，常用 `-itd`

- 通过 `--name` 指定运行时的实例的名字

- `--privileged` 表明特权级运行容器，主机给 docker 所有权限，docker 可以想主机一样控制设备

- `-v` 在 docker 中挂载宿主机目录，例如 `-v {HOST_WORKSPACE}:/{DOCKER_WORKSPCAE}`

## 执行

- `docker exec -it {DOCKER_NAME} /bin/bash`

## 暂停

`docker container ls` 列出正在运行的容器

`docker stop {ID}/{NAME}`

## 删除

`docker rm {ID}/{NAME}`


