/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile, writeFile } = require('fs');
const { promisify } = require('util');
const { join: joinPath } = require('path');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const lokiDir = joinPath(__dirname, '..', '.loki');
const reportJsonPath = joinPath(lokiDir, 'report.json');
const reportHtmlPath = joinPath(lokiDir, 'report.html');

async function generateHtmlReport() {
    try {
        const reportData = await readFileAsync(reportJsonPath, 'utf8');
        const report = JSON.parse(reportData);
        
        const totalTests = report.expectedItems.length;
        const passedTests = report.passedItems.length;
        const failedTests = report.failedItems.length;
        const newTests = report.newItems.length;
        const deletedTests = report.deletedItems.length;
        
        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visual Test Report</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            padding: 20px;
            background: #f8f9fa;
        }
        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .stat-label {
            color: #666;
            font-size: 0.9em;
        }
        .passed { color: #27ae60; }
        .failed { color: #e74c3c; }
        .new { color: #3498db; }
        .deleted { color: #f39c12; }
        .content {
            padding: 20px;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h3 {
            margin-top: 0;
            color: #2c3e50;
            border-bottom: 2px solid #ecf0f1;
            padding-bottom: 10px;
        }
        .test-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 15px;
        }
        .test-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            border-left: 4px solid #ddd;
        }
        .test-item.failed { border-left-color: #e74c3c; }
        .test-item.new { border-left-color: #3498db; }
        .test-item.deleted { border-left-color: #f39c12; }
        .test-item.passed { border-left-color: #27ae60; }
        .no-tests {
            text-align: center;
            color: #666;
            font-style: italic;
            padding: 40px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Visual Test Report</h1>
            <p>Generated on ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="stats">
            <div class="stat-card">
                <div class="stat-number">${totalTests}</div>
                <div class="stat-label">Total Tests</div>
            </div>
            <div class="stat-card">
                <div class="stat-number passed">${passedTests}</div>
                <div class="stat-label">Passed</div>
            </div>
            <div class="stat-card">
                <div class="stat-number failed">${failedTests}</div>
                <div class="stat-label">Failed</div>
            </div>
            <div class="stat-card">
                <div class="stat-number new">${newTests}</div>
                <div class="stat-label">New</div>
            </div>
            <div class="stat-card">
                <div class="stat-number deleted">${deletedTests}</div>
                <div class="stat-label">Deleted</div>
            </div>
        </div>
        
        <div class="content">
            ${failedTests > 0 ? `
            <div class="section">
                <h3>Failed Tests (${failedTests})</h3>
                <div class="test-list">
                    ${report.failedItems.map(item => `<div class="test-item failed">${item}</div>`).join('')}
                </div>
            </div>
            ` : ''}
            
            ${newTests > 0 ? `
            <div class="section">
                <h3>New Tests (${newTests})</h3>
                <div class="test-list">
                    ${report.newItems.map(item => `<div class="test-item new">${item}</div>`).join('')}
                </div>
            </div>
            ` : ''}
            
            ${deletedTests > 0 ? `
            <div class="section">
                <h3>Deleted Tests (${deletedTests})</h3>
                <div class="test-list">
                    ${report.deletedItems.map(item => `<div class="test-item deleted">${item}</div>`).join('')}
                </div>
            </div>
            ` : ''}
            
            ${passedTests > 0 ? `
            <div class="section">
                <h3>Passed Tests (${passedTests})</h3>
                <div class="test-list">
                    ${report.passedItems.map(item => `<div class="test-item passed">${item}</div>`).join('')}
                </div>
            </div>
            ` : ''}
            
            ${totalTests === 0 ? `
            <div class="no-tests">
                <h3>No visual tests were executed</h3>
                <p>This might indicate that the Storybook server was not running or no stories were found.</p>
            </div>
            ` : ''}
        </div>
    </div>
</body>
</html>`;
        
        await writeFileAsync(reportHtmlPath, html);
        console.log('HTML report generated successfully at:', reportHtmlPath);
    } catch (error) {
        console.error('Error generating HTML report:', error);
        process.exit(1);
    }
}

generateHtmlReport();
