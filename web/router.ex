defmodule Gabunomi.Router do
  use Gabunomi.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Gabunomi do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    post "/url/encode", UrlEncDecController, :encode
    post "/url/decode", UrlEncDecController, :decode
  end

  # Other scopes may use custom stacks.
  # scope "/api", Gabunomi do
  #   pipe_through :api
  # end
end
