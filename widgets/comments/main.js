define(function() {

  return {

    type:       'Hull',
    namespace:  'comments',
    templates:  ['comments'],

    initialize: function(options) {
      var self = this;
      this.datasources.commentable = function() {
        return self.data.api.get("hull", this.id, { fields: 'comments' });
      }
    },

    afterRender: function() {
      this.$el.find('textarea').focus();
    },

    actions: {
      comment: function() {
        var description = this.$el.find("textarea").val();
            render = function() { this.render() };
        this.data.api.post("hull", this.id + "/comments", { description: description }, render);
      }
    }
  };
});
