function getFoldersModified(arr) {
    exclude = ['functions', 'deployment'];
    folders = new Set();
    for (let path of arr) {
        pathArr = path.split("/");
        if (pathArr.length < 2) {
            continue;
        }
        
        const folder = pathArr[pathArr.length - 2];
        if (/^[a-zA-Z]+$/.test(folder) && exclude.indexOf(folder) == -1) {
            folders.add(folder)
        }
    }

    return folders;
}

// Array from github
arr = [
    '.idea/.gitignore',
    'functions/.coveragerc',
    'functions/FifthHandler/index.py',
    'functions/FifthHandler/requirements.txt',
    'functions/FirstHandler/index.py',
    'functions/FirstHandler/requirements.txt',
    'functions/FourthHandler/index.py',
    'functions/FourthHandler/requirements.txt',
    'functions/SecondHandler/index.py',
    'functions/SecondHandler/requirements.txt',
    'functions/ThirdHandler/index.py',
    'functions/ThirdHandler/requirements.txt',
    'functions/_tests_/Requirements.txt',
    'functions/_tests_/some-lambda-tests/my_test.py',
    'functions/deployment/my_pipeline.yaml'
]

list = getFoldersModified(arr);
console.log(list)
/*
Set {
  'FifthHandler',
  'FirstHandler',
  'FourthHandler',
  'SecondHandler',
  'ThirdHandler'
}
*/