# Get Today Javascript Action

This action sets the today following format "DD/MM/YYYY" to the `time` output. Useful for setting build times in subsequent steps, or keeping the same recorded time for the entire workflow.

## Outputs

### `time`

"DD/MM/YYYY - 15/03/2020"

## Example usage

```yaml
steps:
- name: Get current time
  uses: DanielRNDev/actions/current-time@master
  id: current-time
- name: Use current time
  env:
    TIME: "${{ steps.current-time.outputs.time }}"
  run: echo $TIME
```
