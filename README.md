# Get Today Javascript Action

This action sets the today following format "DD-MM-YYYY" to the `today` output. Useful for setting release date.

## Outputs

### `today`

"DD-MM-YYYY - 15-03-2020"

## Example usage

```yaml
steps:
- name: Get today string
  uses: DanielRNDev/get-today@v1.0.2
  id: today-string
- name: Use get today
  env:
    TODAY: "${{ steps.today-string.outputs.today }}"
  run: echo $TODAY
```
