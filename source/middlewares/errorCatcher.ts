import { ErrorHandler, GrammyError, HttpError } from 'grammy';
import logger from 'euberlog';

export const errorHandler: ErrorHandler = error => {
    const ctx = error.ctx;
    logger.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = error.error;
    if (e instanceof GrammyError) {
        logger.error('Error in request:', e.description);
    } else if (e instanceof HttpError) {
        logger.error('Could not contact Telegram:', e);
    } else {
        logger.error('Unknown error:', e);
    }
};
