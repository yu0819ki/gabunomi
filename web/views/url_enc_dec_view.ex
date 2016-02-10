defmodule Gabunomi.UrlEncDecView do
  use Gabunomi.Web, :view

  def render("text.json", %{data: text}) do
    %{
      text: text
    }
  end
end
