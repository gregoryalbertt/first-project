# af2-lists

First attempt to make a transportation app

############### IMPORTANT ################
Remeber to change firebase auth rules to:
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
