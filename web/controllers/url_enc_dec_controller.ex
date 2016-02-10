defmodule Gabunomi.UrlEncDecController do
  use Gabunomi.Web, :controller

  def encode(conn, _params) do
    render conn, "text.json", data: URI.encode(_params["text"])
  end

  def decode(conn, _params) do
    render conn, "text.json", data: URI.decode(_params["text"])
  end
end
