#!/usr/bin/env bash
set -e
echo "==> WEB ping"
curl -s -o /dev/null -w "web: %{http_code}\n" "http://localhost:3000" || true
echo "==> CMS endpoints"
for p in tez-makalesis dijital-miras-hikayesis hizmets; do
  curl -s -o /dev/null -w "$p: %{http_code}\n" "http://localhost:1337/api/$p" || true
done
