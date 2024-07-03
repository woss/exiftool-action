# Exiftool Github action


When you need to get the exiftool in your actions but you don't want to do manual job.

The versioning of this action and the repo, follow the exiftool versioning, which currently is not a semver.

## Usage
Simply include it like this before your tests and the code that needs `exiftool`.

```yaml
- name: Use Exiftool
  uses: woss/exiftool-action@v12.87
```

This repo is updated whenever Mr. Phil Harvey updates the [exiftool](https://exiftool.org)

