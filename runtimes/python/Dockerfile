FROM python:3.7-alpine

RUN mkdir runtime

COPY runtimes/python/* /runtime

WORKDIR /runtime

RUN mkdir enigpy

COPY packages/enigpy/* /runtime/enigpy

