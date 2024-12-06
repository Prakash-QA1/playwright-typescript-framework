import winston from "winston";
import path from "path";
import moment from "moment-timezone";

const currentDir = __dirname;

// Go one Level above (Back to 'src')
const srcDir = path.resolve(currentDir, '..');


//change to logging folder
const loggingDir = path.resolve(srcDir,'logging');


// Function to format log enteries with timestamp and timezone
const customFormat = winston.format.printf(({ level, message, timestamp}) =>{
    return `[${timestamp}] ${level}, ${message}`;
})

//set the desired timezone
// const timeZone = "Europe/London"; // For the UK
// const timeZone = "America/New_York"; // For the US
const timeZone = "Asia/Kolkata"; // For India


const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: () => moment().tz(timeZone).format() }),
        customFormat
    ),
    transports: [
        new winston.transports.Console({ level: "debug" }),
        new winston.transports.File({
            filename: path.join(loggingDir, "test_run.log"),
            maxFiles: 5, // Number of log files to retain. 
            maxsize: 300 * 1024, // 10 * 1024 ==10 KB, specify the size in bytes
            level: "info",
        }),
        new winston.transports.File({
            filename: path.join(loggingDir, "test_error.log"),
            maxFiles: 5, // Number of log files to retain. 
            maxsize: 300 * 1024, // 10 * 1024 ==10 KB, specify the size in bytes
            level: "error",
        })
    ],
});

export default logger;