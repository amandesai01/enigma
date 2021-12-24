class EnigmaMapper:
    def __init__(self):
        self.return_array_of_tuples = []

    def map(self):
        raise NotImplementedError

    def run(self):
        self.map()


class EnigmaReducer:
    def __init__(self):
        self.return_dict = dict()

    def reduce(self):
        raise NotImplementedError

    def run(self):
        self.reduce()


class EnigmaShuffler:
    def __init__(self):
        self.return_dict = dict()

    def create_key(self, key):
        if not key in self.return_dict:
            self.return_dict[key] = []

    def update_to_array_via_key(self, key, value):
        if not key in self.return_dict:
            self.create_key(key)
            self.update_to_array_via_key(key, value)
            return
        self.return_dict[key].append(value)
        
    def shuffle(self):
        raise NotImplementedError
    
    def run(self):
        self.shuffle()


class EnigmaApp:
    def __init__(self):
        pass

    def set_mapper_class(self, cls):
        if(issubclass(cls, EnigmaMapper)):
            self.mapper = cls()
            return

    def set_reducer_class(self, cls):
        if(issubclass(cls, EnigmaReducer)):
            self.reducer = cls()
            return

    def set_shuffler_class(self, cls):
        if(issubclass(cls, EnigmaShuffler)):
            self.shuffler = cls()
            return

    def run_mapper(self):
        self.mapper.run()
    
    def run_reducer(self):
        self.reducer.run()

    def run_shuffler(self):
        self.shuffler.run()