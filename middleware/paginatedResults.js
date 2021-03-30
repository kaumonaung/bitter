module.exports = function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;

    const total = await model.countDocuments().exec();

    const results = {
      endIndex: page * limit,
      nextPage: page + 1,
      prevPage: page - 1,
      totalPages: total,
      limit: limit,
    };

    try {
      results.results = await model
        .find()
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(startIndex)
        .exec();
      res.paginatedResults = results;
      next();
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
};
