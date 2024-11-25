FROM python:3.12-alpine

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./src /code/src

EXPOSE 8000

HEALTHCHECK CMD ["curl", "--fail", "http://localhost:8000", "||", "exit 1"]

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
