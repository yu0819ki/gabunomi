ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Gabunomi.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Gabunomi.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Gabunomi.Repo)

