FROM python:3.7-alpine

RUN mkdir runtime

RUN apk update

RUN apk add wget

COPY runtimes/python/* /runtime

WORKDIR /runtime

RUN mkdir enigpy

COPY packages/enigpy/* /runtime/enigpy